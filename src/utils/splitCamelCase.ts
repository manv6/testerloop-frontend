const splitCamelCase = (camelStr: string) => {
    const regex = /([A-Z][a-z]+)/g;
    const words = camelStr.match(regex);
    if (!words) {
        return camelStr;
    }
    const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const result = capitalizedWords.join(' ');

    if (camelStr.charAt(0) === camelStr.charAt(0).toUpperCase()) {
        return camelStr.charAt(0) + result.slice(1);
    }
    return result;
};

export default splitCamelCase;
