type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
}
  
  function compare<T extends Pick<AllType, 'name' | 'position' | 'color' | 'weight'>>(
    top: Pick<AllType, 'name' | 'color'>,
    bottom: Pick<AllType, 'position' | 'weight'>
  ): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
}
  