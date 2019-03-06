
class AddressModernizer {

    /**
     * リプレースする
     * @param {string}source
     * @return {string}
     */
    static modernize(source) {
        let result = source

        result = result.replace(/1/g, "REPLACES")

        return result
    }
}

export default AddressModernizer