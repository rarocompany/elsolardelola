<?php
if ( ! class_exists( 'ReDiRestaurantReservationDb' ) ) 
{
    class ReDiRestaurantReservationDb
    {
        // Create custom database wp_redi_restaurant_reservation if it is not
        public static function CreateCustomDatabase($table_name) {
            global $wpdb;
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';

            if ( !$wpdb->get_var( "show tables like '$table_name'" ) ) {
                $sql = "CREATE TABLE " . $table_name . "(
                    id INT NOT NULL AUTO_INCREMENT,				
                    reservation_number INT,
                    name VARCHAR(50),					
                    lastname VARCHAR(50),					
                    phone VARCHAR(20),
                    email VARCHAR(50),
                    date_from VARCHAR(30),
                    date_to VARCHAR(30),
                    language VARCHAR(30),
                    currenttime DATETIME,
                    prepayment VARCHAR(30),
                    guests INT,
                    comments TEXT,
                    UNIQUE KEY id (id)

                );";
                dbDelta( $sql );
                
                $sql = "CREATE TABLE " . $table_name . '_custom_fields' . "(
                    id INT NOT NULL AUTO_INCREMENT,				
                    reservation_number INT,
                    name TEXT,
                    field_text TEXT,					
                    value TEXT,
                    type VARCHAR(100),
                    UNIQUE KEY id (id)
                );";
                dbDelta( $sql );   				 

            }
            /* add lastname column, alter table if column does not exists */
            $row = $wpdb->get_results(  "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
                    WHERE TABLE_NAME = '".$table_name."' AND COLUMN_NAME = 'lastname'"  );
            if(empty($row)){
                    $wpdb->query("ALTER TABLE ".$table_name." ADD lastname varchar(50) AFTER name");
            }

        }
    }
}