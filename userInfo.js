function createUserProfiles(namesArr, modifiedNamesArr) {
    if (namesArr.length !== modifiedNamesArr.length) {
        throw new Error('Arrays must be of the same length');
    }

    const userProfiles = [];

    let id = 1;

    for (let i = 0; i < namesArr.length; i++) {
        const userProfile = {
            originalName: namesArr[i],
            modifiedName: modifiedNamesArr[i],
            id: id++
        };
        userProfiles.push(userProfile);
    }

    return userProfiles;
}

module.exports = {
    createUserProfiles
};

