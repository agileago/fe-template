export type CompPropType<T extends { new (): { $props: any } }> = UnReadonly<InstanceType<T>['$props']>
export type UnReadonly<T> = {
  -readonly [k in keyof T]: T[k]
}
