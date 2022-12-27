import { expect } from 'chai';
import { clsJoin } from './clsJoin';

describe('clsJoin', () => {
  it('should call with no arguments return empty string', () => {
    expect(clsJoin()).to.equal('');
  });

  it('should call with string return value', () => {
    expect(clsJoin('foo')).to.equal('foo');
  });

  it('should concat values', () => {
    expect(clsJoin('foo', 'bar')).to.equal('foo bar');
  });

  it('should false equation return empty string', () => {
    expect(clsJoin(false && 'foo')).to.equal('');
  });

  it('should true equation return value', () => {
    expect(clsJoin(true && 'foo')).to.equal('foo');
  });

  it('should concat values with equation', () => {
    expect(clsJoin(false && 'foo', true && 'bar')).to.equal('bar');
  });
});
