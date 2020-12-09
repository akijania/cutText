const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if argument is missing', () => {
    expect(formatFullname()).to.equal('Error');
  });
  it('should return an error if "content" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it('should return an error if "content" arg is not <firstname> <lastname>', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John a b c')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
});
