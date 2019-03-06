import test from 'ava';
import AddressModernizer from '../src/addressModernizer'

test('数字', t => {
    console.log(AddressModernizer)
    t.is('０１２３４５６７８９', AddressModernizer.modernize('0123456789'))

})
