import json

def generate_bigbang_array():
    result = []
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            result.append("BIGBANG")
        elif i % 3 == 0:
            result.append("BIG")
        elif i % 5 == 0:
            result.append("BANG")
        else:
            result.append(str(i))
    return result

def save_to_json(data):
    # Write the array to output.json
    with open('output.json', 'w') as f:
        json.dump(data, f)

if __name__ == "__main__":
    # Generate the array
    array = generate_bigbang_array()
    save_to_json(array)
    print("Output has been saved to output.json") 
