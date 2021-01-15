interface MyInterface {
  hey(): string;
}

class MyConcreteClass implements MyInterface {
  public hey(): string {
    return "Hello there!";
  }
}

export default MyConcreteClass;
