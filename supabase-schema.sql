-- Run this in Supabase SQL Editor.
-- The frontend uses only the publishable key. Do not expose service/secret keys in the browser.

create table if not exists public.cable_products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  type text,
  conductor text not null,
  voltage text,
  cores text,
  badge text default 'В наличии',
  image_url text,
  description text,
  tags text[] default '{}',
  popularity integer default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid default auth.uid(),
  customer_name text not null,
  customer_contact text not null,
  comment text,
  items jsonb not null,
  source text default 'catalog-site',
  status text default 'new',
  created_at timestamptz default now()
);

alter table public.cable_products enable row level security;
alter table public.quote_requests enable row level security;

drop policy if exists "Public can read active cable products" on public.cable_products;
create policy "Public can read active cable products"
on public.cable_products
for select
to anon, authenticated
using (is_active = true);

drop policy if exists "Public can create quote requests" on public.quote_requests;
drop policy if exists "Authenticated can create quote requests" on public.quote_requests;
create policy "Authenticated can create quote requests"
on public.quote_requests
for insert
to authenticated
with check (
  auth.uid() is not null
  and customer_name <> ''
  and customer_contact <> ''
  and jsonb_typeof(items) = 'array'
);

drop policy if exists "Users can read own quote requests" on public.quote_requests;
create policy "Users can read own quote requests"
on public.quote_requests
for select
to authenticated
using (user_id = auth.uid());

insert into public.cable_products
  (slug, title, category, type, conductor, voltage, cores, badge, image_url, description, tags, popularity)
values
  ('vvgng-ls-3x25', 'ВВГнг(А)-LS 3x2,5', 'Силовой', null, 'Медь', '0,66/1 кВ', '3 жилы', 'Хит', 'assets/power-cable.png', 'Медный силовой кабель для групп освещения, розеточных линий и распределительных щитов.', array['нг-LS','внутренний','медь'], 98),
  ('pvs-3x15', 'ПВС 3x1,5', 'Гибкий', null, 'Медь', '380 В', '3 жилы', 'Популярно', 'assets/flex-wire.png', 'Провод для удлинителей, подключения бытового и монтажного оборудования.', array['ПВХ','подключение','медь'], 94),
  ('sip2-4x16', 'СИП-2 4x16', 'Самонесущий', 'Воздушный', 'Алюминий', '0,6/1 кВ', '4 жилы', 'Улица', 'assets/aerial-cable.png', 'Самонесущий изолированный провод для воздушных линий электропередачи.', array['воздушная линия','наружный','СИП'], 89),
  ('sip4-2x16', 'СИП-4 2x16', 'Самонесущий', 'Воздушный', 'Алюминий', '0,6/1 кВ', '2 жилы', 'Фасад', 'assets/aerial-cable.png', 'Компактный самонесущий провод для ответвлений к зданиям и наружного подключения.', array['ответвление','фасад','алюминий'], 78),
  ('utp-cat5e', 'UTP Cat.5e 4x2x0,52', 'Связь', null, 'Медь', 'до 125 В', '4 пары', 'LAN', 'assets/data-cable.png', 'Кабель витая пара для офисных и складских сетей передачи данных.', array['витая пара','сеть','LAN'], 87)
on conflict (slug) do update set
  title = excluded.title,
  category = excluded.category,
  type = excluded.type,
  conductor = excluded.conductor,
  voltage = excluded.voltage,
  cores = excluded.cores,
  badge = excluded.badge,
  image_url = excluded.image_url,
  description = excluded.description,
  tags = excluded.tags,
  popularity = excluded.popularity,
  is_active = true;
