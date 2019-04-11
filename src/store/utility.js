export const updateObject = (oldObect, updatedProperties) => {
    return {
        ...oldObect,
        ...updatedProperties
    }
}