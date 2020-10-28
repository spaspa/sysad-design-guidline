import {App} from "@vue/runtime-core";
import LinkCard from "../components/LinkCard.vue"
import LinkCardContainer from "../components/LinkCardContainer.vue"
import ColorPanel from "../components/ColorPanel.vue"
import Callout from "../components/Callout.vue"
import SpacingSample from "../components/traQ/SpacingSample.vue"

export default function (app: App) {
  app.component("LinkCard", LinkCard)
  app.component("LinkCardContainer", LinkCardContainer)
  app.component("ColorPanel", ColorPanel)
  app.component("Callout", Callout)
  app.component("SpacingSample", SpacingSample)
}
