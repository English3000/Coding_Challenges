# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

use Mix.Config

config :todos,
  ecto_repos: [Todos.Repo]

# Configures the endpoint
config :todos, TodosWeb.Endpoint,
  url:             [host: "localhost"],
  secret_key_base: "TJdlYIi2+K9n4/dpF5mRGwt4hhDya2OxpT7CP+6f7Vj/NN7zidkLi6jDOXDdiMpl",
  render_errors:   [view: TodosWeb.ErrorView, accepts: ~w(html json)],
  pubsub:          [name: Todos.PubSub, adapter: Phoenix.PubSub.PG2]

config :ecto_mnesia,
  host:         {:system, :atom, "MNESIA_HOST", Kernel.node},
  storage_type: {:system, :atom, "MNESIA_STORAGE_TYPE", :disc_copies}

config :mnesia,
  dir: 'priv/data/mnesia'

# Configures Elixir's Logger
config :logger, :console,
  format:   "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
