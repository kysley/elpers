export class OrOptions {
  public caseSensitive: boolean;
  public strict: boolean;

  constructor(caseSensitive: boolean = false, strict: boolean = true) {
    this.caseSensitive = caseSensitive;
    this.strict = strict;
  }
}

export const or = (
    comparable: string, 
    condition1: string, 
    condition2: string, 
    opts: OrOptions = new OrOptions()
  ): boolean => {
  try {
    const normalizedComparable = comparable.toLocaleLowerCase();
    const normalizedCondition1 = condition1.toLocaleLowerCase();
    const normalizedCondition2 = condition2.toLocaleLowerCase();
  
    if (opts.caseSensitive) {
      if (opts.strict) {
        return comparable === condition1 || comparable === condition2;
      }
  
      return comparable == condition1 || comparable == condition2;
    }
  
    if (opts.strict) {
      return normalizedComparable === normalizedCondition1 || normalizedComparable === normalizedCondition2;
    }
  
    return normalizedComparable == normalizedCondition1 || normalizedComparable == normalizedCondition2;
  } catch (error) {
    console.log(error);
    // Fix this, should not return just false
    return false;
  }
}