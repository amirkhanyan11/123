


class secret
{
private:
	int privatevalue;
public:

	secret(int i) : privatevalue{i}{}

	int publicvalue;
};


class hackerboy
{
private:
	int privatevalue;
public:
	int publicvalue;
	int& get_value()
	{
		return privatevalue;
	}
};

#include <iostream>

int main()
{
	secret s = 7;

	hackerboy* ptr = (hackerboy*)(&s);
	std::cout << ptr->get_value() << std::endl;
}
