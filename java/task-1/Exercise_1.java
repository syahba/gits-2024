/**
 * Buat sebuah program Java untuk menghitung luas lingkaran.
 * Luas Lingkaran data kita hitung dengan rumus PI x r2
 */

import java.util.Scanner;

public class Exercise_1 {
  public static void main(String[] args) {
    // variable declaration
    double area;
    double pi;
    int r;

    // get input
    Scanner input = new Scanner(System.in);
    System.out.println("Enter a radius:");

    // input data
    pi = 3.14;
    r = Integer.parseInt(input.nextLine());
    area = pi * r * r;

    // print value
    System.out.println("The area of circle is " + area);
  }
}
