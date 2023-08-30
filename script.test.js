describe('#hasDuplicate', function(){
  it('should go through an array and return a boolean value if it has a duplicate or not', function(){
    expect(hasDuplicate([1,2,3,1,4])).toBe(true);
    expect(hasDuplicate([1,2,3,4,5])).toBe(false);
  })
});

describe('#vowelCount', function(){
  it('should read a string and count each vowel and list them out', function(){
    const vowels = new Map([
      ['o', 4],
      ['a', 2],
      ['e', 1],
      ['i', 1]
    ]);
    expect(vowelCount('onomatopoeia')).toEqual(vowels)
  })
})