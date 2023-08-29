import { startGameModule } from "../startGame";
import mockHtml from "../mocks/mockHtml";
import endGame from "../endGame";

const localStorageMock: any = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

jest.mock("../endGame", () => jest.fn());

beforeEach(() => {
  document.body.innerHTML = mockHtml();

  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
    writable: true,
  });
});

afterEach(() => {
  alertMock.mockClear();
  localStorageMock.getItem.mockClear();
  localStorageMock.setItem.mockClear();
  jest.clearAllMocks();
});

describe("addName function", () => {
  test("displays an alert if the name is too short", () => {
    startGameModule.addName();
    expect(alertMock).toHaveBeenCalledWith("please enter a name");
  });

  test("does not display an alert if the name is entered and updates the name", () => {
    const nameInput: any = document.getElementById("playerNameInput");
    const nameAdded = "nameAdded";
    nameInput.value = nameAdded;
    startGameModule.addName();
    // Alert is not called.
    expect(alertMock).not.toHaveBeenCalledWith("please enter a name");
    // The name output is updated
    const nameOutput: any = document.getElementById("playerNameOutput");
    expect(nameOutput.textContent).toContain(nameAdded);
    // localStorage is updated.
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "playerName",
      nameAdded
    );
  });
});

describe("gameStatus function", () => {
  test("If the game is over call endGame", () => {
    localStorageMock.getItem.mockReturnValue("true");
    startGameModule.getGameStatus();
    expect(endGame).toHaveBeenCalledTimes(1);
  });
});
