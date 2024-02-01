import { Layout } from '../src/assets/js/Layout';

describe('Layout tests', () => {

  it('should correctly calculate the actual size of a layout for 1 level of padding', () => {

    const layout = new Layout({
      width: 6,
      height: 5,
      exclude: [0,1,2,3,4,5,6,11,12,17,18,23,24,25,26,27,28,29],
      unlockCategory: 0,
      id: 0
    });

    // 0   1   2   3   4   5
    // 6   7   8   9   10  11
    // 12  13  14  15  16  17
    // 18  19  20  21  22  23
    // 24  25  26  27  28  29

    const { width, height, paddingLeft, paddingRight, paddingTop, paddingBottom } = layout.actualSize();

    expect(width).toEqual(4);
    expect(height).toEqual(3);

    expect(paddingLeft).toEqual(1);
    expect(paddingRight).toEqual(1);
    expect(paddingTop).toEqual(1);
    expect(paddingBottom).toEqual(1);
  });

  it('should correctly calculate the actual size of a layout for 2 levels of padding', () => {
    
    const layout = new Layout({
      width: 6,
      height: 5,
      exclude: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
    });

    const { width, height, paddingLeft, paddingRight, paddingTop, paddingBottom } = layout.actualSize();

    expect(width).toEqual(2);
    expect(height).toEqual(1);

    expect(paddingLeft).toEqual(2);
    expect(paddingRight).toEqual(2);
    expect(paddingTop).toEqual(2);
    expect(paddingBottom).toEqual(2);

    // 0   1   2   3   4   5
    // 6   7   8   9   10  11
    // 12  13  14  15  16  17
    // 18  19  20  21  22  23
    // 24  25  26  27  28  29


  });

  it('should correctly compute padding with different levels on each side', () => {

    const layout = new Layout({
      width: 6,
      height: 6,
      exclude: [0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]
    });

    // 0   1   2   3   4   5
    // 6   7   X   9   10  11
    // 12  13  14  15  16  17
    // 18  19  20  21  22  23
    // 24  25  26  27  28  29
    // 30  31  32  33  34  35

    const { width, height, paddingLeft, paddingRight, paddingTop, paddingBottom } = layout.actualSize();

    expect(width).toEqual(1);
    expect(height).toEqual(1);

    expect(paddingTop).toEqual(1);
    expect(paddingLeft).toEqual(2);
    expect(paddingRight).toEqual(3);
    expect(paddingBottom).toEqual(4);


  })

});