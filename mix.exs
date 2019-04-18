defmodule Todos.MixProject do
  use Mix.Project

  def project, do: [
    app:             :todos,
    version:         "0.0.0",
    elixir:          "~> 1.8",
    elixirc_paths:   elixirc_paths(Mix.env),
    compilers:       [:phoenix, :gettext] ++ Mix.compilers,
    start_permanent: Mix.env == :prod,
    aliases:         aliases(),
    deps:            deps()
  ]

  def application, do: [
    mod:                {Todos.Application, []},
    extra_applications: [:logger, :runtime_tools, :ecto_mnesia]
  ]

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_),     do: ["lib"]

  defp deps, do: [
    {:phoenix, "~> 1.4.3"},
    {:phoenix_pubsub, "~> 1.1"},
    {:plug_cowboy, "~> 2.0"},
    {:phoenix_html, "~> 2.11"},
    {:phoenix_live_reload, "~> 1.2", only: :dev},
    {:gettext, "~> 0.11"},
    {:jason, "~> 1.0"},

    ## Database deps
    {:ecto, "~> 2.1.6"},
    # {:ecto_sql, "~> 3.0"},
    {:ecto_mnesia, "~> 0.9.1"},
    # {:postgrex, ">= 0.0.0"},
    {:phoenix_ecto, "~> 3.0"},
    # {:phoenix_ecto, "~> 4.0"},
  ]

  defp aliases, do: [
    "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
    test:         ["ecto.create --quiet", "ecto.migrate", "test"],
    "ecto.reset": ["ecto.drop", "ecto.setup"],
  ]
end
