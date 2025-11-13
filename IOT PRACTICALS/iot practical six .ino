int num;

void setup() {
  Serial.begin(9600);              // Start serial communication
  Serial.println("Enter a number:"); // Ask user for input
}

void loop() {
  if (Serial.available() > 0) {     // Check if user entered something
    num = Serial.parseInt();        // Read the number
    int square = num * num;         // Calculate square
    Serial.print("Square of ");
    Serial.print(num);
    Serial.print(" is: ");
    Serial.println(square);
    Serial.println("Enter another number:"); // Ask again
  }
}
