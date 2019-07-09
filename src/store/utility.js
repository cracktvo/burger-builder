export const updateObject = (oldObaject, updateProperties) => {
    return {
        ...oldObaject,
        ...updateProperties
    };
};