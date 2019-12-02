
class Clock { // класс
    constructor() {
        this.date = new Date(); // создаем новый объект Date(дата и время)
    }

    set time(date) { // сетер обязательно должен принемать  мин один параметр к сетеру обращение ролисходит с '='
        this.date = date; // указываем параметр который будет доступен для пользователя
    }

    get time() { // при использовании не указываются скобки
        return this.date; // возвращает установленное время
    }

    displayTime() { // метод класса используется обычно со скобками
        alert(this.date.toLocaleTimeString()); // toLocaleTimeString() выводит время формата 00:00:00 без даты
    }
}

class ExtendedClock extends Clock { 
    constructor() {
        super();
    }
    set alarm(alarmDate) {
        this.timeoutId = setTimeout(
            function() {
                alert('dil dil');
            }, (alarmDate.getTime() - this.date.getTime())
        );
    }

    clearAlarm() {
        clearTimeout(this.timeoutId);
    }
}

