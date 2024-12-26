const { describe, expect, it } = require("@jest/globals");
const ServicePeople = require("../src/services/dog");
// TODO: Mudar tudo para adequar a api cachorro.

describe("CRUD people test", () => {
  const service = new ServicePeople();
  it("Get all names in database", () => {
    const names = ["John", "Chris", "Ada", "Leon", "Will", "Justin"];
    expect(service.getAll()).toEqual(names);
  });

  it("Get one name in database", () => {
    const names = service.getAll();
    const index = Math.floor(Math.random() * names.length);
    expect(service.getOne(index)).toEqual(names[index]);
  });

  it("Update name in database", () => {
    const index = Math.floor(Math.random() * service.getAll().length);
    const name = service.getOne(index);
    service.update(name, "UserTestJest");
    expect(service.getOne(index)).toEqual("UserTestJest");
  });
  it("Add name in database", () => {
    const genericName = "Generic";
    service.add(genericName);
    const names = service.getAll();
    expect(names[names.length - 1]).toBe(genericName);
  });
  it("Delete name in database", () => {
    let names = service.getAll(); // Armazena o array original
    const index = Math.floor(Math.random() * names.length);
    const nameToDelete = names[index];
    service.delete(index);
    names = service.getAll();
    expect(names).not.toContain(nameToDelete);
  });
});
