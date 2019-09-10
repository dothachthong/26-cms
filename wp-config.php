<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cms' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'GnDE0m,0LBF}sB=:y>AfB);ov+(,UAzdx;O]qUa#V^mhjq}:!fkF%#BZJV-h&.PU' );
define( 'SECURE_AUTH_KEY',  '2w.GwJCIR..4!<JIWt}{,r),U$hr77S82xe@lMoV5dTEg||H>n5m_&wY[_1(eK^0' );
define( 'LOGGED_IN_KEY',    '{V_k*&uE!^B5-78|,.7m%?w0_qTMr5%p/v&edckq)-C,-N50!(B{7|t#SUKP:q9f' );
define( 'NONCE_KEY',        '-6)}ZOXO~Pd5E(4.c$||RL:*jAhyo~;M2h+jqBx|r;.;P7T%:7$ZhM;(%*dWR6TB' );
define( 'AUTH_SALT',        '/}:bIA**9w h=@*cP2O4/XF&_jawdUWKWs)yJxV^uPV8_Fc,([*i0.o&V]W/f%x:' );
define( 'SECURE_AUTH_SALT', '5G2j0&%I,!53%|;7!HK*veCnfUQzs5geME4WBu^o6/<qnVavgW_)M[{oLNZC$!5t' );
define( 'LOGGED_IN_SALT',   ' 8E1QW:17_ZS%U jT!s&nd~tAkX1`.>u<v) 7,4;f!J?~n6><|Uls%Kq`B~gdU/L' );
define( 'NONCE_SALT',       'wgyAEw:5*|%o/ZKrtdu(Vq$&|7A{ByDouNYjsyBEXEeuQ1$ZnNOq$b3_(e7W# }g' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
