import { FlightsPipe } from './flights.pipe';

describe('FlightsPipe', () => {
  it('create an instance', () => {
    const pipe = new FlightsPipe();
    expect(pipe).toBeTruthy();
  });
});
