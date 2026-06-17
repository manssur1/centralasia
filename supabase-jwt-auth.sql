-- Run this after supabase-schema.sql if the base tables already exist.
-- It makes quote submission require a Supabase Auth JWT.

alter table public.quote_requests
  add column if not exists user_id uuid default auth.uid();

alter table public.quote_requests
  drop constraint if exists quote_requests_customer_name_check;
alter table public.quote_requests
  add constraint quote_requests_customer_name_check
  check (char_length(btrim(customer_name)) between 2 and 80);

alter table public.quote_requests
  drop constraint if exists quote_requests_customer_contact_check;
alter table public.quote_requests
  add constraint quote_requests_customer_contact_check
  check (char_length(btrim(customer_contact)) between 5 and 120);

alter table public.quote_requests
  drop constraint if exists quote_requests_comment_check;
alter table public.quote_requests
  add constraint quote_requests_comment_check
  check (comment is null or char_length(comment) <= 800);

alter table public.quote_requests
  drop constraint if exists quote_requests_items_check;
alter table public.quote_requests
  add constraint quote_requests_items_check
  check (
    jsonb_typeof(items) = 'array'
    and jsonb_array_length(items) between 1 and 40
  );

alter table public.quote_requests
  drop constraint if exists quote_requests_source_check;
alter table public.quote_requests
  add constraint quote_requests_source_check
  check (source in ('catalog-site', 'manual', 'admin'));

alter table public.quote_requests
  drop constraint if exists quote_requests_status_check;
alter table public.quote_requests
  add constraint quote_requests_status_check
  check (status in ('new', 'processing', 'quoted', 'closed'));

alter table public.quote_requests enable row level security;

drop policy if exists "Public can create quote requests" on public.quote_requests;
drop policy if exists "Authenticated can create quote requests" on public.quote_requests;
create policy "Authenticated can create quote requests"
on public.quote_requests
for insert
to authenticated
with check (
  auth.uid() is not null
  and user_id = auth.uid()
  and char_length(btrim(customer_name)) between 2 and 80
  and char_length(btrim(customer_contact)) between 5 and 120
  and (comment is null or char_length(comment) <= 800)
  and jsonb_typeof(items) = 'array'
  and jsonb_array_length(items) between 1 and 40
  and source = 'catalog-site'
);

drop policy if exists "Users can read own quote requests" on public.quote_requests;
create policy "Users can read own quote requests"
on public.quote_requests
for select
to authenticated
using (user_id = auth.uid());
