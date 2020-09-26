import {App} from "@vue/runtime-core";
import LinkCard from "../components/LinkCard.vue"
import LinkCardContainer from "../components/LinkCardContainer.vue"

export default function (app: App) {
  app.component("LinkCard", LinkCard)
  app.component("LinkCardContainer", LinkCardContainer)
}
