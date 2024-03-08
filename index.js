class TeaTime {
    constructor(teaType, durationMinutes) {
      this.teaType = teaType;
      this.durationMinutes = durationMinutes;
      this.timer = null;
    }
  
    startTimer() {
      console.log(`Enjoy your ${this.teaType}! The timer is set for ${this.durationMinutes} minutes.`);
  
      this.timer = setTimeout(() => {
        console.log(`Tea time is over! Your ${this.teaType} is ready.`);
      }, this.durationMinutes * 60 * 1000); // Convert minutes to milliseconds
    }
  
    cancelTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        console.log(`Timer for ${this.teaType} has been canceled.`);
      } else {
        console.log(`No active timer for ${this.teaType}.`);
      }
    }
  }
  
  // Example usage
  const greenTeaTimer = new TeaTime('Green Tea', 3);
  greenTeaTimer.startTimer();
  
  // To cancel the timer (uncomment the line below)
  // greenTeaTimer.cancelTimer();
  