import {App} from "@vue/runtime-core";
import LinkCard from "../components/LinkCard.vue"
import LinkCardContainer from "../components/LinkCardContainer.vue"
import ColorPanel from "../components/ColorPanel.vue"

export default function (app: App) {
  app.component("LinkCard", LinkCard)
  app.component("LinkCardContainer", LinkCardContainer)
  app.component("ColorPanel", ColorPanel)
}
