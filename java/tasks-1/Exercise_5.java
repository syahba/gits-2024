/**
 * A. Buatlah sebuah script untuk menyelesaikan permasalahan:
 * 1. X1 = penjumlahan dari y1 dan y2 , lalu dikalikan dengan penjumlahan y1 dan y2
 * 2. X2 = sisa bagi dari y1 dengan 4, kemudian dikalikan dengan y2
 * 
 * B. Jika kita sudah mendapatkan nilai dari X1 dan X2, buat skrip program untuk menampilkan:
 * 1. X1 besar sama dengan X2 ===> true
 * 2. X2 besar sama dengan X1 ===> false
 * 3. X1 mod 4 == ++X2 mod 5   ===> true
 */

import java.util.Scanner;

public class Exercise_5 {
  public static void main(String[] args) {
    // declare variable;
    int y1;
    int y2;
    int x1;
    int x2;
  
    // get base numbers
    Scanner num1 = new Scanner(System.in);
    System.out.println("Enter first number:");
    y1 = Integer.parseInt(num1.nextLine());

    Scanner num2 = new Scanner(System.in);
    System.out.println("Enter second number:");
    y2 = Integer.parseInt(num2.nextLine());

    // calculation
    x1 = (y1 + y2) * (y1 + y2);
    x2 = y1 % 4 * y2;

    // print results
    System.out.println("X1 = " + x1);
    System.out.println("X2 = " + x2);

    if (x1 >= x2) {
      System.out.println("X1 is greater than or equal to X2: " + true);
    } else {
      System.out.println("X1 is greater than or equal to X2: " + false);
    }

    if (x1 % 4 == ++x2 % 5) {
      System.out.println("X1 mod 4 equal to ++X2 mod 5: " + true);
    }
  }
}
