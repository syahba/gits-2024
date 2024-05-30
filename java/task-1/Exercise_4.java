/**
 * Buat perbandingan True or False sehingga menghasilkan output yang diinginkan
 */

public class Exercise_4 {
  public static void main(String[] args) {
    // declare variable
    int a = 10;   
    int b = 8;
    int c = 12;
    int d = 5;

    // perbandingan
    System.out.println("Tes ke-1: " + (a > b)); // true (>)
    System.out.println("Tes ke-2: " + (b < c)); // true (<)
    System.out.println("Tes ke-3: " + (c >= d)); // true (>=)
    System.out.println("Tes ke-4: " + (d <= a)); // true (<=)
    System.out.println("Tes ke-5: " + (b == b)); // true (==)
    System.out.println("Tes ke-6: " + (c != d)); // true (!=)
    System.out.println("Tes ke-7: " + (b > c)); // false (>)
    System.out.println("Tes ke-8: " + (a <= d)); // false (<=)
    System.out.println("Tes ke-9: " + (a == b)); // false (==)
    System.out.println("Tes ke-10: " + (c != c)); // false (!=)
  }
}
