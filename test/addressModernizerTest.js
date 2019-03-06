import test from 'ava';
import AddressModernizer from '../src/addressModernizer'

test('数字', t => {
    t.is('０１２３４５６７８９', AddressModernizer.modernize('0123456789'))

})

test('大文字', t => {
    t.is('ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ', AddressModernizer.modernize('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
})

test('小文字', t => {
    t.is('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ', AddressModernizer.modernize('abcdefghijklmnopqrstuvwxyz'))
})