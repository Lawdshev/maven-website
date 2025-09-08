def calculate_read_time(text: str, words_per_minute: int = 200, image_count: int = 1) -> int:
    words = len(text.split())
    minutes = words / words_per_minute

    extra_time = (image_count * 10) / 60

    total_minutes = minutes + extra_time
    return round(total_minutes)
