// 创建person类
class Person {
  private name = 'zhangsan';
  protected age = 18;
  say () {
    console.log('我的名字是：' + this.name + ', 我的年龄是：' + this.age);
  }
}

// 创建person实例
// var person = new Person();
// person.say();
// private属性只能在类的内部进行访问
// console.log(person.name); //当一个类成员没有修饰的时候，外界是可以进行访问的，默认就是public进行修饰

// 创建child子类
// 一旦父类讲属性定义成私有的，子类就不可以访问了
class Child extends Person {
  callParent () {
    console.log(super.age);
    super.say();
  }

  static test () {
    console.log('test');
  }
}

var child = new Child();
child.callParent();
// console.log(child.age + child.name); //子类继承类父类，子类就可以直接访问父类公开的属性和方法
console.log(child.say());
console.log(Child.test()); // 类的静态化方法里面，是不允许用this的

