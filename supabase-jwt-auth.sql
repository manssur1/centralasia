-- Run this after supabase-schema.sql if the base tables already exist.
-- It makes quote submission require a Supabase Auth JWT.

alter table public.quote_requests
  add column if not exists user_id uuid default auth.uid();

alter table public.quote_requests enable row level security;

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

drop policy if exists "Public can create quote requests" on public.quote_requests;
create policy "Public can create quote requests"
on public.quote_requests
for insert
to anon
with check (
  customer_name <> ''
  and customer_contact <> ''
  and jsonb_typeof(items) = 'array'
);

drop policy if exists "Users can read own quote requests" on public.quote_requests;
create policy "Users can read own quote requests"
on public.quote_requests
for select
to authenticated
using (user_id = auth.uid());
