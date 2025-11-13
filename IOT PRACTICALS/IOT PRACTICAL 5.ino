int green = 11;
int yellow = 12;
int red = 13;

void setup() {
  pinMode(green, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(red, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {        
    char input = Serial.read();   

    
    digitalWrite(green, LOW);
    digitalWrite(yellow, LOW);
    digitalWrite(red, LOW);

    if (input == 'b') {           
      digitalWrite(green, HIGH);
      delay(300);
      digitalWrite(green, LOW);
      delay(300);
    }
    else if (input == 'g') {       
      digitalWrite(green, HIGH);
    }
    else if (input == 'y') {       
      digitalWrite(yellow, HIGH);
    }
    else if (input == 'r') {      
      digitalWrite(red, HIGH);
    }
  }
}
