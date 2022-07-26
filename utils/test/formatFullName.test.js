const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return an error if "fullname" arg is not a string', () => {
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname('')).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(4)).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });

  it('should return an error if "fullname" arg is in wrong format', () => {
    expect(formatFullname('John Doe Dirk')).to.equal('Error');
    expect(formatFullname('JohnDoe')).to.equal('Error');
  });

  it('should format fullname with uppercase for first latter of firstName and lastName', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('joHN dOe')).to.equal('John Doe');
    expect(formatFullname('John Doe')).to.equal('John Doe');
  });

});