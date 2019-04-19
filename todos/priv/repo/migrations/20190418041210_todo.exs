defmodule Todos.Repo.Migrations.Todo do
  use Ecto.Migration

  def change do
    create_if_not_exists table(:todos) do
      # TODO: define col's based on frontend form w/ phoenix_live_view, `ecto.migrate`

      # If needed...
      # add :uid, :string
      # (DateTime.now <> unique user id) |> DateTime.to_string()
    end
  end
end
