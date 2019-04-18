defmodule Todos.Repo do
  use Ecto.Repo,
    otp_app: :todos,
    adapter: EctoMnesia.Adapter #Ecto.Adapters.Postgres
end
