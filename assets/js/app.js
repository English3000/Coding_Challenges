import css from "../css/app.css"
import "phoenix_html"
import LiveSocket from "phoenix_live_view"

new LiveSocket("/live").connect()