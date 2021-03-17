interface MyInterface {
  hey(): string
}

type MyType = {
  myProp?: string
}

class MyConcreteClass implements MyInterface {
  public hey(): string {
    const text: MyType = { myProp: 'Sweet!' }
    return `Hello there, ${text}`
  }
}

export default MyConcreteClass
