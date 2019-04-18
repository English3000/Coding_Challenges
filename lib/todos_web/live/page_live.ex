defmodule TodosWeb.PageLive do
  use Phoenix.LiveView

  @nil_state [title: nil, description: nil]
  def mount(_session, socket),
    do: {:ok, socket
              |> assign(todos: []) # Fetch from db
              |> assign(@nil_state) }

  def render(assigns),
    do: TodosWeb.PageView.render("index.html", assigns)
    # TODO: Figure out how to setup Emmet && code highlighting for `~L`

  def handle_event("typing", input, socket) do
    {:noreply, Enum.reduce(input, socket, fn {key, value}, socket_ ->
      socket_ |> update(String.to_atom(key), fn _ -> value end)
    end) }
  end
  def handle_event("create-todo", todo, socket) do
    # TODO: Save to db
    socket_ = socket
              |> update(:todos, &[todo | &1])
              |> update(:title, &to_nil/1)
              |> update(:description, &to_nil/1)

    {:noreply, socket_}
  end
  def handle_event("delete-todo", title, socket) do
    {:noreply, socket |> update(:todos, fn todos ->
      # TODO: Improve search (convert to maps; use timestamp keys for ordering)
      Enum.filter(todos, fn todo -> todo["title"] != title end)
    end)}
  end

  def to_nil(_), do: nil
end
