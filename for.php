<?php

header("X-Robots-Tag: noindex, nofollow");

// Error reporting for development (change to 0 in production)
error_reporting(E_ALL);
ini_set('display_errors', 9);

// Database configuration
define('DB_HOST', '127.0.0.1');       // Database host
define('DB_USER', 'u727169065_qHZsq');            // Database username
define('DB_PASS', '8abSnkUvWB');                // Database password
define('DB_NAME', 'u727169065_BhVcF');   // Database name

// Create a connection to the database
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
define( 'WP_MEMORY_LIMIT', '256M' );

$SITESETTING = array(
                'companyName' => 'Navkar Finovision India Private Limited',
                'companyName2' => '(Money On Navkar)',
                'companyMobile' => '1800-202-8381',
                'companyMobile2' => '0120-495-1054',
                'companyMobile3' => '+91-7291003800',
                'companywebsite' => 'moneyonnavkar.com',
                'companyEmail' => 'connect@moneyonnavkar.com',
                'companyAddress' => 'Rajendra Palace Near PBM HOSPITAL Sadul Colony 2nd Floor Office No. Of 114-115 Bikaner Pin Code : 334001 Rajasthan',
                'companyGSTINNo' => '08AAHCN8675J1ZQ',
                'companyCIN' => 'U74999RJ2021PTC077619',
                );
                
?>




 <?php
 
 session_start();
//  echo "session";

 ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
 
 // $curl = curl_init();

// curl_setopt_array($curl, [
//   CURLOPT_URL => "https://api.sandbox.co.in/kyc/aadhaar/okyc/otp",
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_ENCODING => "",
//   CURLOPT_MAXREDIRS => 10,
//   CURLOPT_TIMEOUT => 30,
//   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//   CURLOPT_CUSTOMREQUEST => "POST",
//   CURLOPT_POSTFIELDS => json_encode([
//     '@entity' => 'in.co.sandbox.kyc.aadhaar.okyc.otp.request',
//     'aadhaar_number' => '771418144944',
//     'consent' => 'y',
//     'reason' => 'For KYC'
//   ]),
//   CURLOPT_HTTPHEADER => [
//     "accept: application/json",
//     "authorization: eyJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJBUEkiLCJyZWZyZXNoX3Rva2VuIjoiZXlKaGJHY2lPaUpJVXpVeE1pSjkuZXlKaGRXUWlPaUpCVUVraUxDSnpkV0lpT2lKdGIyNWxlVzl1Ym1GMmEyRnlOekF4TkRCQVoyMWhhV3d1WTI5dElpd2lZWEJwWDJ0bGVTSTZJbXRsZVY5c2FYWmxYelJoWjJ4d1dUWnJjSFJzV1RkVlJXdzNka1pyTWtoT1pHNTZVMFZJUTJOUUlpd2lhWE56SWpvaVlYQnBMbk5oYm1SaWIzZ3VZMjh1YVc0aUxDSmxlSEFpT2pFM05qazBNekl5TURjc0ltbHVkR1Z1ZENJNklsSkZSbEpGVTBoZlZFOUxSVTRpTENKcFlYUWlPakUzTXpjNE9UWXlOekY5LmQtQzNKQ3pFak96bFdKa3dzOVZhWVo4SnM4QTZ4MWJCMmdrY0x2RFB1V3lsX0dSa3AwSEtCdkJEdTc2a3czMWdhdWlXbExoeXBzWkRxcm13RWNKVWFnIiwic3ViIjoibW9uZXlvbm5hdmthcjcwMTQwQGdtYWlsLmNvbSIsImFwaV9rZXkiOiJrZXlfbGl2ZV80YWdscFk2a3B0bFk3VUVsN3ZGazJITmRuelNFSENjUCIsImlzcyI6ImFwaS5zYW5kYm94LmNvLmluIiwiZXhwIjoxNzM3OTgyNjcxLCJpbnRlbnQiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3Mzc4OTYyNzF9.Mapk_lSRfniPXUyMHKTZGWlrxSVCPO-mW0aefUkZXFbDz9KgVz87EyML3FPQ0sS8xPX2o7W7K-OPx12iYcAWvw",
//     "content-type: application/json",
//     "x-api-key: key_live_4aglpY6kptlY7UEl7vFk2HNdnzSEHCcP",
//     "x-api-version: 2.0"
//   ],
// ]);

// $response = curl_exec($curl);
// $err = curl_error($curl);

// curl_close($curl);

// if ($err) {
//   echo "cURL Error #:" . $err;
// } else {
//   echo $response;
// }

$aadhaarNumber = $_SESSION['aadhaarNumber'];


$access_token = 'yR8kbrVP';


// Prepare the cURL request
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://api.sandbox.co.in/kyc/aadhaar/okyc/otp/verify",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => json_encode([
        '@entity' => 'in.co.sandbox.kyc.aadhaar.okyc.request',
        'reference_id' => '29674249',
        'otp' => '253539'
    ]),
    CURLOPT_HTTPHEADER => [
        "accept: application/json",
        "authorization: eyJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJBUEkiLCJyZWZyZXNoX3Rva2VuIjoiZXlKaGJHY2lPaUpJVXpVeE1pSjkuZXlKaGRXUWlPaUpCVUVraUxDSnpkV0lpT2lKdGIyNWxlVzl1Ym1GMmEyRnlOekF4TkRCQVoyMWhhV3d1WTI5dElpd2lZWEJwWDJ0bGVTSTZJbXRsZVY5c2FYWmxYelJoWjJ4d1dUWnJjSFJzV1RkVlJXdzNka1pyTWtoT1pHNTZVMFZJUTJOUUlpd2lhWE56SWpvaVlYQnBMbk5oYm1SaWIzZ3VZMjh1YVc0aUxDSmxlSEFpT2pFM05qazNPVEEzTlRZc0ltbHVkR1Z1ZENJNklsSkZSbEpGVTBoZlZFOUxSVTRpTENKcFlYUWlPakUzTXpneU5UUTNPRFo5LnUxWFQzT2F6RlFrclg4ZjZiS1hPTjJadlNGZDY5dlR6V3VsYWxmMXktaTBNZmFqRHlNTC1PUU8zSEFtdE5fY2ZfWUZxMHNoMndyZDZHS3Q0UVpEaWVRIiwic3ViIjoibW9uZXlvbm5hdmthcjcwMTQwQGdtYWlsLmNvbSIsImFwaV9rZXkiOiJrZXlfbGl2ZV80YWdscFk2a3B0bFk3VUVsN3ZGazJITmRuelNFSENjUCIsImlzcyI6ImFwaS5zYW5kYm94LmNvLmluIiwiZXhwIjoxNzM4MzQxMTg2LCJpbnRlbnQiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MzgyNTQ3ODZ9.QWx3d-fVOqwhrCWToSw7EhhPZB_SQBZTVbCZlR57cIimqUrIBp-J8CkTJqnRwkMDWAcNPWEuxBxmjf1VtHnSWg",
        "content-type: application/json",
        "x-api-key: key_live_4aglpY6kptlY7UEl7vFk2HNdnzSEHCcP",
        "x-api-version: 2.0"
    ],
]);

// Execute the cURL request
$response = curl_exec($curl);
$err = curl_error($curl);

// Close cURL
curl_close($curl);

if ($err) {
    echo "cURL Error: " . $err;
} else {
    echo "Response: " . $response;
    $responseJsonData = json_decode($response, true);

    if ($responseJsonData && isset($responseJsonData['code'])) {
        if ($responseJsonData['code'] == 200) {
            echo "OTP Verified Successfully.";
            print_r($responseJsonData['data']);

            echo "hello ";


// Assuming $response is a JSON string
$response = json_decode($response); // Decode the JSON string into a PHP object

// Check if the decoding was successful
if (json_last_error() === JSON_ERROR_NONE) {
    // Check if it's an object and handle accordingly
    if (is_object($response)) {
        echo "Response is an object.<br />";
        // Check if 'data' and 'status' keys exist
        if (isset($response->data->status)) {
           echo "Statussssssssssssss : " . $response->data->status . "<br />";
            if (isset($response->data->status) && ($response->data->status === 'VALID' || $response['data']['status'] === 'VALID')) {
            // Extract and display data from the response
            if (isset($response->data)) {
                $data = $response->data; // Extract the data object

                // Safely extract 'Name' from the data object if it exists
                if (isset($response->data->name)) {
                   // Extracting individual fields from the response
                    $name = $response->data->name;
                    $father_name = $response->data->care_of ?? 'N/A';
                    $dob = $response->data->date_of_birth ?? 'N/A';
                    $address = $response->data->full_address ?? 'N/A';
                    $email_hash = $response->data->email_hash ?? 'N/A';
                    $mobile_hash = $response->data->mobile_hash ?? 'N/A';
                
                    // Safely accessing nested address fields
                    $district = $response->data->address->district ?? 'N/A';
                    $pincode = $response->data->address->pincode ?? 'N/A';
                    $city = $response->data->address->vtc ?? 'N/A';
                    $photoData = $response->data->photo ?? 'N/A';
                
                    // Displaying extracted fields
                    echo "<br />Name: " . $name . "<br />";
                    // echo "Care Of: " . $father_name . "<br />";
                    // echo "Date of Birth: " . $dob . "<br />";
                    // echo "Full Address: " . $address . "<br />";
                    // echo "Email Hash: " . $email_hash . "<br />";
                    // echo "Mobile Hash: " . $mobile_hash . "<br />";
                    // echo "IMG: " . $photoData . "<br />";
                } else {
                    echo "<br />Name is not available in the response.<br />";
                }
            } else {
                echo "Data object is not available in the response.<br />";
            }
            
            
            
            // Prepare data for database insertion
            // $name = $data['name'];
            
            // $gender = $data['gender'];
            // $father_name = $data['care_of'];
            // $dob = date('Y-m-d', strtotime($data['date_of_birth']));
            // $address = $data['full_address'];
            // $email_hash = $data['email_hash'];
            // $district = $data['address']['district'];
            // $pincode = $data['address']['pincode'];
            // $city = $data['address']['vtc']; // Assuming 'vtc' is the city
            // $mobile_hash = $data['mobile_hash'];

            // // Handle the base64-encoded photo
            // $photoData = $data['photo'] ?? '';
            $step = 2;
            echo "Hello";
            if (!empty($photoData)) {
                // Check if the data contains the base64 data after the comma
                if (strpos($photoData, ',') !== false) {
                    $photoParts = explode(',', $photoData);
                    $photoData = base64_decode($photoParts[1]);
                } else {
                    $photoData = base64_decode($photoData);
                }

                // if ($photoData !== false) {
                //     // Generate a unique name for the file
                //     $newFileName = uniqid('aadhaar_', true) . '.jpg';

                //     // Define the upload directory
                //     $uploadDir = '../../includs/images/adata/';

                //     // Set the destination path
                //     $dest_path = $uploadDir . $newFileName;

                //     // Save the decoded image to the specified path
                //     if (file_put_contents($dest_path, $photoData)) {
                //         $dp = $dest_path;

                                       // Update loans table
                        $query = "UPDATE loans 
                                  SET aadhar_number = ?, step = ?, gender=?, aadhar_verification = ?, name = ?, father_name = ?, dob = ?, address = ?, email_hash = ?, district = ?, pincode = ?, city = ?, mobile_hash = ?, dp = ? 
                                  WHERE access_token = ?";
                        $stmt = $conn->prepare($query);
                        $stmt->bind_param("sssssssssssssss", $aadhaarNumber, $step, $gender, $aadhar_verified, $name, $father_name, $dob, $address, $email_hash, $district, $pincode, $city, $mobile_hash, $dp, $access_token);

                        // Set the values
                        $aadhar_verified = 1;
                        $step = 2;
                        
                        // $mailsent =instantPendingLoan($access_token);

                        if ($stmt->execute()) {
                            // Check if the aadhar_number already exists in aadhar_details table
                            $checkQuery = "SELECT COUNT(*) FROM aadhar_details WHERE aadhar_number = ?";
                            $checkStmt = $conn->prepare($checkQuery);
                            $checkStmt->bind_param("s", $aadhaarNumber);
                            $checkStmt->execute();
                            $checkStmt->bind_result($count);
                            $checkStmt->fetch();
                            $checkStmt->close();

                            if ($count == 0) { // If no record exists, insert new record
                                $insertQuery = "INSERT INTO aadhar_details (aadhar_number, gender, name, father_name, dob, address, email_hash, district, pincode, city, mobile_hash, dp)
                                                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                                $insertStmt = $conn->prepare($insertQuery);
                                
                                // print_r($insertStmt);
                                $insertStmt->bind_param("ssssssssssss", $aadhaarNumber, $gender, $name, $father_name, $dob, $address, $email_hash, $district, $pincode, $city, $mobile_hash, $dp);
                                // print_r($insertStmt);

                              if ($insertStmt->execute()) {
                                    // Access token to pass
                                    ?>
                                    <script type="text/javascript">
                                        const accessToken = "<?php echo htmlspecialchars($access_token, ENT_QUOTES, 'UTF-8'); ?>";
                                        window.location.href = `step3.php?at=${accessToken}`;
                                    </script>
                                    <?php
                                } else {
                                     header("Location: step3.php?at=$access_token");
                                    exit();
                                    ?>
                                    <script type="text/javascript">
                                        const accessToken = "<?php echo htmlspecialchars($access_token, ENT_QUOTES, 'UTF-8'); ?>";
                                        window.location.href = `step3.php?at=${accessToken}`;
                                    </script>
                                    <?php
                                }
                                $insertStmt->close();
                            } else {
                                 header("Location: step3.php?at=$access_token");
                                    exit();
                                echo "Aadhar number already exists in aadhar_details table.";
                                ?>
                                    <script type="text/javascript">
                                        const accessToken = "<?php echo htmlspecialchars($access_token, ENT_QUOTES, 'UTF-8'); ?>";
                                        window.location.href = `step3.php?at=${accessToken}`;
                                    </script>
                                    <?php
                            }
                        } else {
                            echo "Failed to update the loans table: " . $stmt->error;
                        }
                        $stmt->close();
                    } else {
                        echo "Failed to save the image.";
                    }
                // } else {
                //     echo "Failed to decode image data.";
                // }
            // } else {
            //     echo "No image data found.";
            // }
        } else {
            // echo "Aadhaar OTP verification failed: " . $response['message'];
            echo "Please Try Again Letter In Some Time";
        }
            
        } else {
            echo "Status key not found in object.<br />";
        }
    } elseif (is_array($response)) {
        echo "Response is an array.<br />";
        // Check if 'data' and 'status' keys exist in the array
        if (isset($response['data']['status'])) {
            echo "Status: " . $response['data']['status'] . "<br />";
        } else {
            echo "Status key not found in array.<br />";
        }
    } else {
        echo "Invalid response format<br />";
    }
} else {
    echo "Failed to decode JSON. Error: " . json_last_error_msg() . "<br />";
}

// echo "<hr />";
// var_dump($response);


            echo "LAST POINTS";
      
        } else {
            
            echo "vjvjh";
            echo "Failed: " . $responseJsonData['message'];
        }
    } else {
        echo "Invalid response format.";
    }
}
        
        
        

?>