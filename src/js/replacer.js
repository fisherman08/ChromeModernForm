
class Replacer {

    /**
     * リプレースする
     * @param source string
     * @return {string}
     */
    static replace(source) {
        let result = source

        result = result.replace(/1/, "REPLACES")

        return result
    }
}