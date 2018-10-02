export const extractSelection = info => {
  const joins = [];
  const selections = [];

  info.fieldNodes[0].selectionSet.selections.map(selection => {
    if (selection.selectionSet)
      joins.push(selection.name.value);
    else {
      selections.push(selection.name.value);
    }
  });

  return {
    joins,
    selections
  }
}

export default {
  extractSelection
}