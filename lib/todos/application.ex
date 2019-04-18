defmodule Todos.Application do
  @moduledoc false
  use Application

  def start(_type, _args) do
    [Todos.Repo, TodosWeb.Endpoint]
    |> Supervisor.start_link(strategy: :one_for_one, name: Todos.Supervisor)
  end

  @doc "Updates endpoint config whenever app is updated."
  def config_change(changed, _new, removed) do
    TodosWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
