


employee = {
  "name": "Momo",
  "age": 61,
  "salary": 10000
} 


def increase(key,val = 1):
    def func(**Momo):
        global employee
        Momo[key] += val
        employee = Momo
    return func


func1 = increase("age",1)
func2 = increase("salary", 1000)


while(employee["age"] != 70):
    func1(**employee)
    if(employee["age"] %2 == 1):
        func2(**employee)
print(employee["salary"])


