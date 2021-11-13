// unit.test.js

const {isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor} = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Testing isPhoneNumber validity', ()=>{
  expect(isPhoneNumber('(555) 321-5532')).toBe(true);
});

test('Testing isPhoneNumber validity', ()=>{
  expect(isPhoneNumber('(888) 312-3312')).toBe(true);
});

test('Testing isPhoneNumber invalid case', ()=>{
  expect(isPhoneNumber('839834')).toBe(false); 
});

test('Testing isPhoneNumber invalid case', ()=>{
  expect(isPhoneNumber('ayylmao')).toBe(false);
});

test('Testing isEmail valid case',()=>{
  expect(isEmail('foo@bar.it')).toBe(true);
});

test('Testing isEmail valid case',()=>{
  expect(isEmail('bar@foo.fga')).toBe(true);
});

test('Testing isEmail invalid case',()=>{
  expect(isEmail('foo@bar.ddddddd')).toBe(false);
});

test('Testing isEmail invalid case',()=>{
  expect(isEmail('lkasjdflkjasf@v.343')).toBe(false);
});

test('isStrongPassword valid case',()=>{
  expect(isStrongPassword('F_fD2ds332')).toBe(true);
});

test('isStrongPassword valid case',()=>{
  expect(isStrongPassword('c3_35jf9vm')).toBe(true);
});

test('isStrongPassword invalid case',()=>{
  expect(isStrongPassword('3dsngjkuhg')).toBe(false);
});

test('isStrongPassword invalid case',()=>{
  expect(isStrongPassword('_____________________________')).toBe(false);
});

test('IsDate valid case',()=>{
  expect(isDate('11/11/1111')).toBe(true);
});

test('IsDate valid case',()=>{
  expect(isDate('23/03/0002')).toBe(true);
});

test('IsDate invalid case',()=>{
  expect(isDate('84/213/344')).toBe(false);
});

test('IsDate invalid case',()=>{
  expect(isDate('///342')).toBe(false);
});

test('isHexColor valid case', ()=>{
  expect(isHexColor('#FbF')).toBe(true);
});

test('isHexColor valid case', ()=>{
  expect(isHexColor('#F0F0f0')).toBe(true);
});

test('isHexColor invalid case', ()=>{
  expect(isHexColor('#GHIJKL')).toBe(false);
});

test('isHexColor invalid case', ()=>{
  expect(isHexColor('#93ZX3H')).toBe(false);
});