import { Layer } from '../types'

export function updateSelection(nodes: Array<Layer>): void {
  const selection: Array<SceneNode> = []
  for (const { id } of nodes) {
    const node = figma.getNodeById(id) as SceneNode
    selection.push(node)
  }
  figma.currentPage.selection = selection
}
