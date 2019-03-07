import test from 'ava';
import AddressModernizer from '../src/addressModernizer'

test('数字', t => {
    t.is('０１２３４５６７８９',  AddressModernizer.modernize('0123456789'));
});

test('大文字', t => {
    t.is('ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',  AddressModernizer.modernize('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
});

test('小文字', t=> {
    t.is('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ', AddressModernizer.modernize('abcdefghijklmnopqrstuvwxyz'));
});

test('ASCII記号', t => {
    t.is('！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～' , AddressModernizer.modernize('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'));
});

test('それ以外の記号', t => {
    t.is('￥・' , AddressModernizer.modernize('¥･'));
});

test('スペース', t => {
    t.is('　' , AddressModernizer.modernize(' '));
});

test('住所サンプル', t => {
    t.is('東京都千代田区千代田１－２－３　インペリアルハイツ・Ａ－２０１' , AddressModernizer.modernize('東京都千代田区千代田1-2-3 インペリアルハイツ･A-201'));
});