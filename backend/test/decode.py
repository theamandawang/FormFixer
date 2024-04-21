import base64

def decode_base64_to_mp4(input_file, output_file):
    # Read base64-encoded data from input file
    with open(input_file, 'r') as f:
        base64_data = f.read()

    # Decode base64 data
    decoded_data = base64.b64decode(base64_data)

    # Write decoded data to output MP4 file
    with open(output_file, 'wb') as f:
        f.write(decoded_data)

# Example usage
input_file = 'outvid'  # Input file containing base64-encoded data
output_file = 'output.mp4'  # Output MP4 file
decode_base64_to_mp4(input_file, output_file)
